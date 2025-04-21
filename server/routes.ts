import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { ZodError } from "zod";
import { sendNotificationEmail, sendConfirmationEmail, sendTestEmail } from "./emailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      console.log("Contact API called with data:", JSON.stringify(req.body));
      const validatedData = insertContactSchema.parse(req.body);
      console.log("Data validation passed");
      
      // Store contact without sending emails for now to isolate the problem
      const newContact = await storage.createContact(validatedData);
      console.log("Contact stored successfully:", JSON.stringify(newContact));
      
      // Success response - email sending is bypassed
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully (email notifications disabled)",
        data: newContact
      });
    } catch (error) {
      console.error("Error in contact API:", error);
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        console.error("Validation error:", validationError.message);
        res.status(400).json({
          success: false,
          message: validationError.message
        });
      } else {
        console.error("Unexpected error:", error instanceof Error ? error.message : "Unknown error");
        if (error instanceof Error && error.stack) {
          console.error("Stack trace:", error.stack);
        }
        res.status(500).json({
          success: false,
          message: error instanceof Error ? error.message : "An unexpected error occurred"
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (_req: Request, res: Response) => {
    try {
      const contacts = await storage.getContacts();
      res.status(200).json({
        success: true,
        data: contacts
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to retrieve contacts"
      });
    }
  });
  
  // Test email route (temporary, for testing only)
  app.get("/api/test-email", async (req: Request, res: Response) => {
    try {
      const email = req.query.email as string;
      
      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Email parameter is required"
        });
      }
      
      const result = await sendTestEmail(email);
      
      if (result) {
        res.status(200).json({
          success: true,
          message: "Test email sent successfully"
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to send test email"
        });
      }
    } catch (error) {
      console.error("Error sending test email:", error);
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : "An unexpected error occurred"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

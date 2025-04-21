export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      message: 'Method not allowed' 
    });
  }

  try {
    // Simply echo back the data
    res.status(200).json({
      success: true,
      message: 'Request received successfully',
      data: req.body
    });
  } catch (error) {
    console.error('Error in contact-simple:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing request'
    });
  }
}

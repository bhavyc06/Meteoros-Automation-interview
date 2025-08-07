export const submitForm = async (req, res) => {
  const { name, email, phone } = req.body;
  // In real app: persist to DB or send email.
  console.log('📨  Form submission:', { name, email, phone });
  res.status(201).json({ msg: 'Thanks, we will contact you soon!' });
};

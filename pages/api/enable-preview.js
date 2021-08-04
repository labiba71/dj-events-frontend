export default (req, res) => {
  res.setPreviewData({}); // set some cookies
  // __next_preview_data => JWT token
  // __prerender_bypass => random ID
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};

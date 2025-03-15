function downloadCSS() {
  const link = document.createElement('a');
  link.href = 'styles.css'; // Path to your CSS file
  link.download = 'styles.css'; // Name of the file when downloaded
  link.click(); // Programmatically triggers the download
}

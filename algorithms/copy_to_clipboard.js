// Get the text you want to copy
const textToCopy = "This is the text to copy to the clipboard.";

// Attempt to copy the text to the clipboard
navigator.clipboard.writeText(textToCopy)
  .then(() => {
    console.log('Text copied to the clipboard: ' + textToCopy);
  })
  .catch((error) => {
    console.error('Unable to copy text: ' + error);
  });
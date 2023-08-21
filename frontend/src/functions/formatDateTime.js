export default function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleString()
    return formattedDate;
  }
function convertDateTime(date) {
  return Intl.DateTimeFormat('ru-RU', {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        }).format(new Date(date))
}

export default convertDateTime;
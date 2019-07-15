// Cheatsheet https://devhints.io/wip/intl-datetime
function dateFormat(date, options) {
  return new Intl.DateTimeFormat('pt-BR', options || {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date));
}

export default dateFormat;
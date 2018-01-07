const Plugin = ({ slots, id, onSendData }) => {
  const handleChange = (e) => {
    onSendData({
      type: 'text',
      text: `Selected ${e.target.value} date-time`,
      data: { date: e.target.value, messageId: id }
    })
  }

  return (
    <select onChange={handleChange}>
      {(slots || []).map((slot, i) => <option value={slot} key={i}>{slot}</option>)}
    </select>
  )
}

const Entry = () => null // Could be used for initialization

if (typeof window !== 'undefined') {
  window.botpress = window.botpress || {}
  window.botpress['botpress-webchat-plugin-calendar'] = { Plugin, Entry }
}

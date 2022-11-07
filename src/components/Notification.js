import { connect } from 'react-redux'

const Notification = (props) => {
  const ilmo = String(props.notification.content)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (ilmo.includes('voted')) {
    return (
    <div style={style}>
      {ilmo}
    </div>
  )}

  if (ilmo.includes('added')) {
    return (
      <div style={style}>
        {ilmo}
      </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification

// NOTITIFICATION KOMPONENTTI 5.18 SAAKKA (ilman connectia)
/*import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state => state.notification))
  const nStr = String(notification.content)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (nStr.includes('voted')) {
    return (
    <div style={style}>
      {notification.content}
    </div>
  )}

  if (nStr.includes('added')) {
    return (
      <div style={style}>
        {notification.content}
      </div>
  )}
}

export default Notification*/
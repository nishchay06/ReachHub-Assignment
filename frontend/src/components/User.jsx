export default function User({ username, title }) {
  return (
    <div>
      <span style={{ margin: "5px", padding: "2px" }}>
        Username : {username}
      </span>
      <span style={{ margin: "5px", padding: "2px" }}>Title : {title}</span>
    </div>
  )
}

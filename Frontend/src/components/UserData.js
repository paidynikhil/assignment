const UserData = ({users}) => {
  return (
    <>
      {
        users.map((curUser) => {
          const { _id, name } = curUser;

          return (
            <tr key={_id}>
              <td>{_id}</td>
              <td>{name}</td>
            </tr>
          )
        })
      }
    </>
  )
}
export default UserData;
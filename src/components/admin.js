import "./admin.css"

function Admin(){

 return(
    <div className="container">
    <input type="text" className="searchBox" placeholder="Serach By name, email or role"/>
    <table className="table">
           <thead>
            <tr>
            <th><input type="checkbox" /></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>Prashant
                    </td>
                    <td>The watcher
                    </td>
                    <td>The watcher
                    </td>
                    <td>
                    
                    </td>
                </tr>
            </tbody>
    </table>
    </div>
 )
}
export default Admin;
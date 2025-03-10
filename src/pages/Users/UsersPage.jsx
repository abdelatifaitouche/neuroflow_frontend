import React, { useEffect, useState } from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import getUsers from "@/services/usersServices"
function UsersPage() {

    const [usersData , setUsersData] = useState([])
    const [loading , setLoading] = useState(false)


    const fetchUsers = async () =>{
        setLoading(true)
        const data = await getUsers();
        if(data){
            setUsersData(data.users)
        }

        setLoading(false)

    }

    useEffect(()=>{
        fetchUsers()
    },[])



  return (
    <div className='bg-blue-50 rounded-md p-2'>
        <div>
        <Table>
        <TableHeader> 
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Departement</TableHead>
            <TableHead>view</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {loading ? "loading ..." :
                usersData.map((user)=>{
                    return <TableRow>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
        
                    <TableCell>{user.role}</TableCell>
        
                    <TableCell>{user.departement}</TableCell>
                    <TableCell>View</TableCell>
        
        
                    </TableRow>
                })
             }
            
        </TableBody>
        
      </Table>
        </div>
      
    </div>
  )
}

export default UsersPage

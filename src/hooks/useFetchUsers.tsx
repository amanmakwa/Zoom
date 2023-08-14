import React,{useState, useEffect}from 'react'
import { useAppSelector } from '../app/hooks';
import { userRef } from '../utils/FirebaseConfig';
import { getDoc, getDocs, query, where } from 'firebase/firestore';
import { UserType } from '../utils/Types';

const useFetchUsers = () => {
 const [users, setUsers] = useState<Array<UserType>>([]);
 const uid = useAppSelector((zoom) => zoom.auth.userInfo?.uid);

 useEffect(() => {
    if(uid){
        const getUsers = async () => {
            const firestoreQuery = query(userRef, where("uid","!=", uid));
            const data = await getDocs(firestoreQuery);
            const firebaseUsers=[]
            data.forEach((user) => {
                const userData = user.data();
                firebaseUsers.push({
                    ...userData,
                    label: userData.name,
                })
            })
            setUsers(firebaseUsers);
        }
        getUsers()
    }
 }, [uid])
 return [users]
 
}

export default useFetchUsers
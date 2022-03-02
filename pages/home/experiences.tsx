import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux'
import {useAppSelector} from '../../app/hooks';
import LoginForm from '../../components/LoginForm';

const ExperiencesPage = () => {

    const data = useAppSelector(state => state.loginSlice)
return (
    <>
    <div>ExperiencesPage</div>
    <div> Currently Logged in : {data.email}</div>
    <div> Password : {data.password}</div>
    </>
)
}

export default ExperiencesPage
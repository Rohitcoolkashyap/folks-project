import React from 'react'
import Header from '../../components/Dashboard/Header';
import SearchBar from '../../components/Dashboard/SearchBar';
import Section1 from '../../components/Dashboard/Section1';

export default function Dashboard() {
    return (
        <div>
        <Header/>
        <Section1/>
        <SearchBar/>
        </div>
    )
}

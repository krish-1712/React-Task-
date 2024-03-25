import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './infinite.css'
import Navbar from './Navbar';

const Infinite = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        axios.get(`https://restcountries.com/v3.1/all`)
            .then(response => {
                setData(prevData => [...prevData, ...response.data]);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    };

    const handleScroll = () => {
        const distanceFromBottom = document.documentElement.offsetHeight - (window.innerHeight + window.scrollY);
        if (distanceFromBottom < 100 && !loading) {
            fetchData();
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar>
            <div>
                <h1>Rest Countries</h1>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Capital</th>
                                <th>Region</th>
                                <th>Population</th>
                                <th>LatLang</th>
                                <th>Flag</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name.common}</td>
                                    <td>{item.capital}</td>
                                    <td>{item.region}</td>
                                    <td>{item.population}</td>
                                    <td>{item.latlng}</td>
                                    <td>{item.flag}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {loading && <p>Loading...</p>}
                </div>
            </div>
        </Navbar>
    )
}

export default Infinite;

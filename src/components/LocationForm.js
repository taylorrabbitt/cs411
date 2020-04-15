import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';

function LocationForm({ callback }) {
    const [ country, setCountry ] = useState(null)
    const handleChange = (e) => setCountry(e.target.value);
    const handleSearch = (e) => {
        e.preventDefault();
        //pass the search to the other component that handles the API query.
        callback(country);
    }
    return (
        <form onSubmit={handleSearch}>
            <h3>Please enter your province information.</h3>
            <Input name="country" onChange={handleChange} placeholder="search Province/State" />
            <Button type="submit" color="primary">Search</Button>
        </form>
    )
}

export default LocationForm;
import React, { useState, useEffect } from "react";
import data from '../data.json'
// import './NewSubmissionForm.css'

const kInitialFormData = {
    submission_name: '',
    votes_count: 0,
};

const kInitialSelectData = {
    "term": "Select a Restaurant"
}

const NewSubmissionForm = (props) => {
    const [formData, setFormData] = useState(kInitialFormData);
    const [yelpData, setYelpData] = useState([kInitialSelectData])

    const handleChange = (event) => {

        const value = event.target.value;
        
        setFormData((prev) => ({
            ...prev, submission_name: value
        }));
    };

    useEffect(() => {
        // Function to fetch Yelp data (assuming it returns a Promise)
        const fetchYelpData = async () => {
          try {
            const yelpData = await props.generateYelpData(formData.submission_name);
            setYelpData(yelpData);
          } catch (error) {
            console.log('Error fetching Yelp data:', error);
          }
        };
    
        // Fetch Yelp data whenever formData.submission_name changes
        fetchYelpData();
      }, [formData.submission_name, props]);

    // let yelpData = props.generateYelpData(formData.submission_name)
    const yelpItems = data.map((entry, index) => {
        return (
            <option key={index} value={entry.name}>
                {entry.name}
            </option>
        )
    })


    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.handleRestaurantSubmit({ ...formData });
        // reset the fields after data has been submitted
        setFormData(kInitialFormData);
      };

    return (
        <section className="restaurant-submission-form">
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    id="submission"
                    name="submission-name"
                    value={formData.submission_name}
                    onChange={handleChange}
                    placeholder="Search for a restaurant"
                />
            </form>
            <select className="dropdown">
                {yelpItems}
            </select>
        </section>
    );
};

export default NewSubmissionForm;
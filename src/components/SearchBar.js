import React, {useState} from "react";
import { Input } from "@material-tailwind/react";
import { List, ListItem, Card } from "@material-tailwind/react";
 
const SearchBox = (props) => {

  const kInitialFormData = {
    submission_name: '',
    votes_count: 0
  }

  const [formData, setFormData] = useState(kInitialFormData)

  const options = props.autofillData.map((entry) => {
    return (
      <ListItem>{entry.name}</ListItem>
    )
  })

  const handleChange = (event) => {
    console.log(event.target.value);
    const submission_name = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData, 
      submission_name: submission_name
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // props.setSelectedRestaurant(event);
    console.log('that was a submit');
    console.log(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-72 flex-col gap-6">
        <Input 
          onChange={handleChange}
          label="Enter Restaurant Name"
        />
        {/* <Card className="w-96">
          <List>
            {options}
          </List>
        </Card> */}
      </div>
    </form>
  );
}

export default SearchBox;

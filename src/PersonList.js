import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    render() {
        return (
            <div className="container mt-4">
                <h2 className="text-center text-white bg-success py-2">User List</h2>
                <div className="row">
                    {this.state.persons.map((person, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                            <div className="card text-white bg-info">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img
                                                src={person.picture.large}
                                                alt={person.name.first}
                                                className="img-fluid rounded-circle"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <h5 className="card-title">
                                                {person.name.title} {person.name.first} {person.name.last}
                                            </h5>
                                            <p className="mb-1"><strong>Gender:</strong> {person.gender}</p>
                                            <p className="mb-1"><strong>User Name:</strong> {person.login.username}</p>
                                            <p className="mb-1"><strong>Time Zone:</strong> {person.location.timezone.description}</p>
                                            <p className="mb-1"><strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country} - ${person.location.postcode}`}</p>
                                            <p className="mb-1"><strong>Email:</strong> {person.email}</p>
                                            <p className="mb-1"><strong>Birth Date:</strong> {new Date(person.dob.date).toLocaleDateString()} ({person.dob.age} years)</p>
                                            <p className="mb-1"><strong>Phone:</strong> {person.phone}</p>
                                            <p className="mb-1"><strong>Cell:</strong> {person.cell}</p>
                                        </div>
                                    </div>
                                    <div className="text-center mt-3">
                                        <button className="btn btn-primary">Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default PersonList;

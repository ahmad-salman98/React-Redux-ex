import React from 'react';
import { connect } from 'react-redux'
import '../index.css';



const Main = (props) => {
    const users = props.users;
    return (
        <div className='d-flex justify-content-center align-items-center m-5 p-5 '>
            <div className='bank-img'>
                <img src="https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?w=2000" alt="" />
            </div>
            <table className="table table-striped" id='table' style={{ width: '50%', minWidth: '300px', margin: 'auto 20% auto auto', borderRadius: '13px', boxShadow: '0 0 15px #00000025', background: ' #ffffff90;' }}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">name</th>
                        <th scope="col">Account number</th>
                        <th scope="col">Account type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(users => {
                            return (
                                <tr key={users.id}>
                                    <th scope="row">{users.id}</th>
                                    <td>{users.customerName}</td>
                                    <td>{users.accountNumber}</td>
                                    <td>{users.accountType}</td>
                                </tr>

                            );
                        })
                    }
                </tbody>
            </table >
        </div>
    );
}

const connecter = (state) => {
    return {
        users: state.accounts
    }
}

export default connect(connecter)(Main);
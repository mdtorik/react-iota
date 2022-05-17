import React, { useState }  from "react";
import axios from 'axios'
import Swal from 'sweetalert2';
import { Link, useHistory } from 'react-router-dom'

const Create = () => {
  
  //const history = useHistory();
  const [studentInput, setStudent] = useState({
      name: '',
      description: '',
      error_list: [],
  });

  const handleInput = (e) => {
      e.persist();
      setStudent({...studentInput, [e.target.name]: e.target.value })
  }

  const saveStudent = (e) => {
      e.preventDefault();
      
      const data = {
          name:studentInput.name,
          description:studentInput.description
      }

      axios.post(`/api/add-student`, data).then(res => {

          if(res.data.status === 200)
          {
              Swal("Success!",res.data.message,"success");
              setStudent({
                  name: '',
                  description: '',
                  error_list: [],
              });
             // history.push('/students');
          }
          else if(res.data.status === 422)
          {
              setStudent({...studentInput, error_list: res.data.validate_err });
          }
      });
  }
    return (
      <div>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-md-6">
                  <div className="card">
                      <div className="card-header">
                          <h4>Add Students 
                              <Link to={'/'} className="btn btn-danger btn-sm float-end"> BACK</Link>
                          </h4>
                      </div>
                      <div className="card-body">
                          
                          <form onSubmit={saveStudent} >
                              <div className="form-group mb-3">
                                  <label> Name</label>
                                  <input type="text" name="name" onChange={handleInput} value={studentInput.name} className="form-control" />
                                  <span className="text-danger">{studentInput.error_list.name}</span>
                              </div>
                              <div className="form-group mb-3">
                                  <label> description</label>
                                  <input type="text" name="description" onChange={handleInput} value={studentInput.description}  className="form-control" />
                                  <span className="text-danger">{studentInput.error_list.description}</span>
                              </div>

                              <div className="form-group mb-3">
                                  <button type="submit" className="btn btn-primary">Save Student</button>
                              </div>
                          </form>

                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
};

export default Create;
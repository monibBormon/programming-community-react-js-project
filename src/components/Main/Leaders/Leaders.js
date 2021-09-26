import React from 'react';

const Leaders = (props) => {
    const { name, img, organization, income, languages } = props.leader;
    return (
        <div class="col">
            <div class="card h-100 shadow">
                <img height='280px' src={img} alt="" />
                <div class="card-body">
                    <h3 className='fs-4 fw-bold'>{name}</h3>
                    <h5 className='fs-6'><span className='fw-bold'>Agency: </span>{organization}</h5>
                    <p><small className='text-capitalize'><span className='fw-bold'>Expert In :</span> {languages}</small></p>
                    <p><span className='fw-bold'>Yearly Income:</span> ${income}</p>
                    <button onClick={() => props.handleAddToIncome(props.leader)} className='btn btn-outline-dark'><i class="fas fa-dollar-sign me-1"></i>Add Income To Total</button>
                </div>
            </div>
        </div>
    );
};

export default Leaders;
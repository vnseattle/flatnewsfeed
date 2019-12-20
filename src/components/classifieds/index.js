/**
 * Classifieds   
 * Author: Henry Ng - Dec 18, 2019
 */
import React, { Component } from 'react';
import callAPI from './../../utils/callAPI';
import './classifieds.css'

class Classifieds extends Component{

    constructor(props){
        super(props);
        this.state = {
            jobs:[],
            houses:[],
            others:[]
        }

         // Get Job Lists
        callAPI(`GetClass.php?type=1`).then(res => { 
            this.setState({ jobs: res.data });
        });

        // Get Job Lists
         callAPI(`GetClass.php?type=2`).then(res => { 
            this.setState({ houses: res.data });
        });

        // Get Job Lists
        callAPI(`GetClass.php?type=3`).then(res => { 
            this.setState({ others: res.data });
        });
    }

    

    render(){
        var {jobs,houses,others} = this.state;
        var jobList = jobs.map(job =>  <div key={job.Id} className="classifieds__classified--item"><b>{job.Location} - </b>{job.Content} {job.Phone}</div> )
        var houseList = houses.map(house =>  <div key={house.Id} className="classifieds__classified--item"><b>{house.Location} - </b>{house.Content} {house.Phone}</div> )
        var otherList = others.map(other =>  <div key={other.Id} className="classifieds__classified--item"><b>{other.Location} - </b>{other.Content} {other.Phone}</div> )

        return (
            <div id="classifieds">
                <div className="classifieds__classified--column">
                   {jobList}
                </div>
                <div className="classifieds__classified--column">
                    {houseList}
                </div>
                 <div className="classifieds__classified--column">
                    {otherList}
                 </div>
            </div>
            
        )
    }
}



export default Classifieds;
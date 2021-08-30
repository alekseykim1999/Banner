import React from 'react';
import logo from './logo.svg';
import './App.css';
import { IWorkerAppState, IWorkerItem, IWorkerAppProps } from '../interfaces/IWorker';


class WorkerItem implements IWorkerItem {
  name: string | undefined;
  status: string | undefined;
 
}



export default class App extends React.Component<IWorkerAppProps, IWorkerAppState> {

  constructor(props: IWorkerAppProps) {
    super(props);

    let rssItems: WorkerItem[] = [];
    this.state = {
      workers: rssItems,
    }

  }

  componentDidMount()
  {
      this.callBackendAPI()
      .then(result => {
        this.setState({
          workers: result
        });
      }).
      catch(err=>console.log(err))
  }
  

  callBackendAPI = async() =>
  {
    const response = await fetch('/express_backend');
    const body =  await response.json();
    if(response.status !== 200)
    {
      throw Error(body.message)
    }
      return body
  }


  render()
  {
    return (
      <div className="App">
        <h1>Hello</h1>
        {
            this.state.workers.map(user=>
              <div>
                <a href="#">{user.name}</a>
                <br/>
                <a href="#">{user.status}</a>
                <br/>
              </div>)
          }

      </div>
    );
  }
 
}



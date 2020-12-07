import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import web3 from './web3'
import windt from './windt';

class App extends Component {

  state = {
    admin: '',
    message: '',
    projectValue: '',
    tokensTotal: '',
    partners: '',
    tokenValue: '',

    serviceCost: '',
    platformCost: '',
    maintanenceCost: '',
    taxCost: '',
    insuranceCost: '',
    utilityCost: '',

    enterValue: '',
    paymentFromGrid: ''
  }

  async componentDidMount() {
    const admin = await windt.methods.admin().call();  
    const balance = await web3.eth.getBalance(windt.options.address);
    const projectValue = await windt.methods.projectValue().call();
    const tokensTotal = await windt.methods.tokensTotal().call();
    const partners = await windt.methods.getPartners().call();
    const tokenValue = await windt.methods.tokenValue().call();

    var serviceCost = await windt.methods.serviceCost().call();
    var platformCost = await windt.methods.platformCost().call();
    var maintanenceCost = await windt.methods.maintanenceCost().call();
    var taxCost = await windt.methods.taxCost().call();
    var insuranceCost = await windt.methods.insuranceCost().call();
    var utilityCost = await windt.methods.utilityCost().call();

    serviceCost = web3.utils.fromWei(serviceCost, 'ether');
    platformCost = web3.utils.fromWei(platformCost, 'ether');
    maintanenceCost = web3.utils.fromWei(maintanenceCost, 'ether');
    taxCost = web3.utils.fromWei(taxCost, 'ether');
    insuranceCost = web3.utils.fromWei(insuranceCost, 'ether');
    utilityCost = web3.utils.fromWei(utilityCost, 'ether');

    const projectBalance = Number(balance) - Number(projectValue);

    this.setState({ 
      admin,
      balance, 
      projectValue, 
      tokensTotal, 
      partners: partners.length,
      tokenValue,
      projectBalance,
    
      serviceCost,
      platformCost,
      maintanenceCost,
      taxCost,
      insuranceCost,
      utilityCost
    });
  }

  submitPaymentFromGrid = async (event) => {
    event.preventDefault();

    this.setState({ message: 'Waiting for transaction to process...' });
    const accounts = await web3.eth.getAccounts();

    await windt.methods.gravy().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.paymentFromGrid, 'ether')
    });

    this.setState({ message: 'Transaction Successful!' });
  }

  enter = async (event) => {
    event.preventDefault();

    this.setState({ message: 'Waiting for transaction to process...' });
    const accounts = await web3.eth.getAccounts();

    await windt.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.enterValue, 'ether')
    });

    this.setState({ message: 'Transaction Successful!' });
  }

  setYearlyMaintanence = async (event) => {
    event.preventDefault();

    this.setState({ message: 'Waiting for transaction to process...' });
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting for transaction to process...'});

    await windt.methods
      .setAnualCosts(
        this.state.serviceCost,
        this.state.platformCost,
        this.state.maintanenceCost,
        this.state.taxCost,
        this.state.insuranceCost,
        this.state.utilityCost)
      .send({
        from: accounts[0]
        });    

    this.setState({ message: 'Transaction Successful!' });
  }

  render() {
    return (
      <div>
        <h1>Client</ h1>
        <p>Project value: <b>{ web3.utils.fromWei(this.state.projectValue, 'ether') } </b>ETH</p>
        <p>Tokens total: <b>{ this.state.tokensTotal }</b></p>
        <p>Tokens available: <b>{ Number(this.state.tokensTotal) - Number(this.state.partners) }</b></p>
        <p>Token cost: <b>{ web3.utils.fromWei(this.state.tokenValue) }</b> ETH</p>
        <h4>Maintanence</ h4>
        <p>Service yearly costs: <b>{ this.state.serviceCost }</b> ETH</p>
        <p>Platform yearly costs: <b>{ this.state.platformCost }</b> ETH</p>
        <p>Maintanence yearly costs: <b>{ this.state.maintanenceCost }</b> ETH</p>
        <p>Tax yearly costs: <b>{ this.state.taxCost }</b> ETH</p>
        <p>Insurance yearly costs: <b>{ this.state.insuranceCost }</b> ETH</p>
        <p>Utility yearly costs: <b>{ this.state.utilityCost }</b> ETH</p>
          <form onSubmit = { this.enter }>
            Buy token 
            <input value = { this.state.enterValue } onChange = { event => this.setState({ enterValue: event.target.value }) }/>
            <button>Buy</button>
          </form>

        <hr />
        <h1>{ this.state.message } </h1>
        <hr />

        <h1>Admin</ h1>

        <p>Account: { this.state.admin } ETH</p>
        <p>Project balance: <b>{ this.state.projectBalance / 1000000000000000000 }</b> ETH</p>
        <p>Shit heads: <b>{ this.state.partners }</b> </p>
        <form onSubmit = { this.submitPaymentFromGrid } >
          <input value = { this.state.paymentFromGrid } onChange = { event => this.setState({ paymentFromGrid: event.target.value }) }/> ETH Monthly payment from grid <br />
          <button>Pay</button>
        </form>
        <form onSubmit = { this.setYearlyMaintanence }>
            <label>Set yearly maintanence costs: </label><br />
            <input value = { this.state.serviceCost } onChange = { event => this.setState({ serviceCost: event.target.value }) }/>WEI / ETH Service<br />
            <input value = { this.state.platformCost } onChange = { event => this.setState({ platformCost: event.target.value}) }/>WEI / ETH Platform<br />
            <input value = { this.state.maintanenceCost } onChange = { event => this.setState({ maintanenceCost: event.target.value}) }/>WEI / ETH Maintanence<br />
            <input value = { this.state.taxCost } onChange = { event => this.setState({ taxCost: event.target.value }) }/>WEI / ETH Tax<br />
            <input value = { this.state.insuranceCost } onChange = { event => this.setState({ insuranceCost: event.target.value }) }/>WEI / ETH Insurance<br />
            <input value = { this.state.utilityCost } onChange = { event => this.setState({ utilityCost: event.target.value }) }/>WEI / ETH Utility<br />
            <button>Set</button>
        </form>
      </div>
    );
  }
}

export default App;

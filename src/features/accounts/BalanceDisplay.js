import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return { balance: state.account.balance };
}

// Old way
export default connect(mapStateToProps)(BalanceDisplay);

// new Way with hooks using useSelector
//export default BalanceDisplay;

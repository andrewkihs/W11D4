import { connect } from "react-redux";
import { login } from "../actions/session_actions";
import SessionForm from "./session_form";

const mapStatetoProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'login'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(login(formUser)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(SessionForm);

import { connect } from "react-redux";
import { signup } from "../actions/session_actions";
import SessionForm from "./session_form";

const mapStatetoProps = (state, ownProps) => ({
  errors: state.errors,
  formType: 'signup'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (formUser) => dispatch(signup(formUser)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(SessionForm);

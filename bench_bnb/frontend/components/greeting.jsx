import React from 'react';
import { connect } from 'react-redux';



const mapStateToProps = state => ({
  currentUser: state.session.id,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

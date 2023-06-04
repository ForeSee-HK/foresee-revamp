const NavProgress = (props) => {
    return (
    <div className="nav-progress" style={{ position: 'sticky', top: 0, background: '#fff', margin: 0, widith: "100%" }}>
      {/* <div className="progress-bar" style={{ width: props.progress + '%' }}></div> */}
      <div>{props.progress}</div>
    </div>
  );
}
export default NavProgress;
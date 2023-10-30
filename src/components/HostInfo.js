import '../sass/modules/hostinfo.scss'

function HostInfo({ host }) {
    const [firstName, lastName] = host.name.split(' ');
  
    return (
      <div className="accomodation_content_host_name">
        <span>{firstName}</span>
        <span>{lastName}</span>
        <img src={host.picture} alt={`host`} />
      </div>
    );
  }
  
  export default HostInfo;
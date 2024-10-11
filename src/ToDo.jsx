import './ToDo.css';
import PropTypes from 'prop-types';

function ToDo({
  id,
  name,
  status,
  removal,
  statusChange }) {
  const completed = () => status !== "Not Completed";
  const statusColor = () => !completed() ?
    "#00008B" :
    "green";
  const textColor = () => !completed() ?
    "#FFFFFF" :
    "#FF00FF";
  return (
    <div
      style={{
        backgroundColor: statusColor(),
        marginBottom: '3px',
      }}
      data-id={id}
      data-name={name}
    >
      <p className="taskLabel"
      style={{textDecoration: completed() ? 'line-through' : '' }}
      >
        <span>{name}</span>
        <button
          style={{
            position: 'relative',
            overflow: 'visible',
            transition: 'all 0.6s ease',
            padding: '10px 20px',
            fontSize: '16px',
            lineHeight: '1',
            height: '40px',
            minWidth: '80px',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            color: textColor(),
            borderRadius: '5px',
          }}
          onMouseEnter={(event) => {
            event.target.style.textShadow = `
              0 0 25px rgba(255, 255, 255, 0.5),
              0 0 30px rgba(255, 255, 255, 0.5),
              0 0 35px rgba(255, 255, 255, 0.5)
            `;
            event.target.style.fontSize = '32px';
          }}
          onMouseLeave={(event) => {
            event.target.style.boxShadow = 'none';
            event.target.style.filter = 'none';
            event.target.style.fontSize = '16px';
          }}
          onClick={() => removal(id)}
        >X</button>
      </p>

      <button
        style={{
          position: 'relative',
          overflow: 'visible',
          transition: 'all 0.42s ease',
          transform: 'scale(0.9)',
          width: '40%',
          padding: '10px 10px',
          fontSize: '18px'
        }}
        onMouseEnter={(event) => {
          event.target.style.backgroundColor = !completed() ?
            'green' :
            'red';
          event.target.style.color = 'white';
          event.target.textContent = !completed() ?
            "Complete" :
            "Undo?";
          event.target.style.transform = completed() ?
            'scale(1.0)' :
            'scale(0.8)';
          event.target.style.marginRight = !completed() ?
            '0' :
            '5px';
          event.target.style.padding = completed() ?
            '10px 20px' :
            '10px 10px';
        }}
        onMouseLeave={(event) => {
          event.target.style.backgroundColor = 'black';
          event.target.style.color = textColor();
          event.target.textContent = status;
          event.target.style.transform = 'scale(1)';
          event.target.style.padding = '10px 20px';
        }}
        onClick={(event) => statusChange(event)}
      >{status}</button>
      {
        completed() && (
          <button
            style={{
              position: 'relative',
              overflow: 'visible',
              transition: 'all 0.42s ease',
              textShadow: 'none',
              backgroundColor: "black",
              color: textColor(),
              transform: 'scale(0.9)',
              padding: '10px 30px'
            }}
            onMouseEnter={(event) => {
              event.target.style.textShadow = `
              0 0 25px rgba(255, 255, 255, 0.5),
              0 0 30px rgba(255, 255, 255, 0.5),
              0 0 35px rgba(255, 255, 255, 0.5)
            `;
              event.target.style.backgroundColor = 'red';
              event.target.style.color = 'yellow';
              event.target.textContent = "Remove?";

              event.target.style.fontSize = '22px';
              event.target.style.transform = 'scale(0.85)'
            }}
            onMouseLeave={(event) => {
              event.target.style.textShadow = 'none';
              event.target.style.backgroundColor = "black";
              event.target.style.color = textColor()

              event.target.textContent = "Remove";
              event.target.style.fontSize = '24px';

              event.target.style.transform = 'scale(0.9)';
              event.target.style.padding = '10px 30px'
            }}
            onClick={() => removal(id)}
          >Remove</button>
        )
      }
    </div >
  );
}

ToDo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Not Completed', 'Completed']).isRequired,
  removal: PropTypes.func.isRequired,
  statusChange: PropTypes.func.isRequired
};

export default ToDo;

import { Link } from 'react-router-dom';

const LINKS = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Start',
    to: '/StartPage',
  },
];

const Navs = () => {
  return (
    <div>
 
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
  
    </div>
  );
};

export default Navs;

// const NavList = styled.ul`
//   display: flex;
//   justify-content: center;
//   list-style: none;
//   margin: 0 0 30px;
//   padding: 0;
//   li {
//     margin: 0 10px;
//   }
// `;

// const LinkStyled = styled(NavLink)`
//   display: block;
//   padding: 3px 15px;
//   position: relative;
//   text-decoration: none;
//   color: ${({ theme }) => theme.mainColors.gray};
//   &.active {
//     color: ${({ theme }) => theme.mainColors.blue};
//     &:after {
//       content: '';
//       position: absolute;
//       display: block;
//       height: 2px;
//       left: 0%;
//       bottom: 0;
//       background-color: ${({ theme }) => theme.mainColors.blue};
//       animation: slide-in 0.3s ease-in forwards;
//       @keyframes slide-in {
//         from {
//           left: 50%;
//           width: 0;
//         }
//         to {
//           left: 0%;
//           width: 100%;
//         }
//       }
//     }
//   }
// `;
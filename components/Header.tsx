
interface IHeader {
    headline?: string 
}


const Header = ( content: IHeader ): JSX.Element => {
   const { headline } = content['content'];
  
   return(
    <header className="b-header js-equinoxNode t-dark">
        <div className="b-header__backdrop">
            <div className="b-header__backdropLayer b-header__backdropLayer--1"></div>
            <div className="b-header__backdropLayer b-header__backdropLayer--2"></div>
        </div>
        <div className="b-header__grid">
            <div className="b-header__shape b-header__shape--1" id="circle">
            </div>
            <div className="b-header__shape b-header__shape--2" id="donut">
            </div>
            <div className="b-header__shape b-header__shape--3" id="lines">
            </div>
            <div className="b-header__content">
                <h2 className="b-header__title" dangerouslySetInnerHTML={{__html: headline ? headline : 'Header Component' }}/>
            </div>
        </div>
    </header>
   );
};

export default Header;
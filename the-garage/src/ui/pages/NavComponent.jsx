import {
  NavLogo,
  SearchInput,
  NavLocation,
  NavMenu,
  NavbarStyled,
  ContainerNavStyled,
  LoginSpace,
} from '../components';

export const NavComponent = () => {
  return (
    <>
      <NavbarStyled>
        <ContainerNavStyled>
          <NavLogo />
          <SearchInput />
          <LoginSpace />
        </ContainerNavStyled>
        <ContainerNavStyled>
          <NavLocation />
          <NavMenu />
        </ContainerNavStyled>
      </NavbarStyled>
    </>
  );
};

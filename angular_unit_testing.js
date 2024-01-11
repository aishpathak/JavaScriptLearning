/* Testbed configures and initalizes environment for unit testing and provides method to create component and services 
in unit tests.
*/
TestBed.configureTestingModule({declarations:[BannerComonent]});

const fixture = TestBed.createComonent(BannerComonent);

const component = fixture.componentInstance; // it will get access to component dom

expect(component).toBeDefined();


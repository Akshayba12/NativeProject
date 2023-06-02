import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tittle: {
    fontSize: 30,
    color: '#2242D8',
    fontWeight: '500',
    marginHorizontal: 20,
    marginBottom: 5,
  },
  container: {
    marginHorizontal: 10,
  },
  box: {
    height: 90,
    width: 335,
    borderColor: '#2242D8',
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: '#F4F6FD',
  },
  container1: {
    display: 'flex',
    flexDirection: 'column',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  options: {
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 335,
    height: 45,
    borderRadius: 20,
    backgroundColor: '#F4F6FD',
  },
  icons: {
    marginRight: 20,
    color: '#2242D8',
  },
  boxText: {
    color: '#2242D8',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  boxTextLog: {
    marginLeft: 25,
    color: '#EF4B4B',
  },
});

export default styles;

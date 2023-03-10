import { findAllByRole, render, screen } from '@testing-library/react';
import Scoops from './../Scoops';
import userEvent from '@testing-library/user-event';
/*
!SEÇİCİLER
? Komut [All] BySeçici
! komut > get  / find / query
! get =>  elementler DOMda var ise kullanılır
! find => elementlerin ne zaman geliceği belli değilse //async
! query => elementler DOM da yok ise  
*/

test('API den gelen veriyi her çeşit objesi için ekrana basar', async () => {
  render(<Scoops />);

  //çeşitlerde resimleri çek
  const resimler = await screen.findAllByRole('img', { name: 'cesit' }); //selectors
  expect(resimler).toHaveLength(4);
});

test('Dondurma çeşitlerinde ekleme ve sıfırlama işlemi', async () => {
  render(<Scoops />);
  const user = userEvent.setup();

  // gerekli elemanları alalım
  const toplamH1 = screen.getByRole('heading', {
    name: /Price: /i,
  });

  //ekle butonlarını çekme
  const ekleBtns = await screen.findAllByRole('button', { name: /ekle/i });

  //Sıfırlama butonlaarını çekme
  const delBtns = await screen.findAllByRole('button', { name: /Sıfırla/i });

  //Ekleme işlemleri ve kontrolü
  await user.click(ekleBtns[0]);

  expect(toplamH1).toHaveTextContent('3');

  await user.dblClick(ekleBtns[1]);

  expect(toplamH1).toHaveTextContent('9');

  //Sıfırlama işlemii
  await user.click(delBtns[1]);
  expect(toplamH1).toHaveTextContent('3');
});
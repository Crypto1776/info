import React from 'react';

const Informacion = () => {
  const informationArray = [{
    id: '1',
    image: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    text: 'After generating your fancy text symbols, you can copy and paste the "fonts" to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text in agario is probably generated using a fancy text converter similar to this), to generate a creative-looking instagram, facebook, tumblr, or twitter post, for showing up n00bs on Steam, or just for sending messages full of beautiful text to your buddies.\n' +
      '\n' +
      'The only exception is if your paste destination has a font which doesn\'t support some unicode characters. For example, you\'ll might find that some websites don\'t use a unicode font, or if they do, the font doesn\'t have all the characters required. In that case, you\'ll see a generic "box" in which was created when the browser tries to create a fancy letter. This doesn\'t mean there\'s an error with this translator, it just means the website\'s font doesn\'t support that character.',
  },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      text: 'After generating your fancy text symbols, you can copy and paste the "fonts" to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text in agario is probably generated using a fancy text converter similar to this), to generate a creative-looking instagram, facebook, tumblr, or twitter post, for showing up n00bs on Steam, or just for sending messages full of beautiful text to your buddies.\n' +
        '\n' +
        'The only exception is if your paste destination has a font which doesn\'t support some unicode characters. For example, you\'ll might find that some websites don\'t use a unicode font, or if they do, the font doesn\'t have all the characters required. In that case, you\'ll see a generic "box" in which was created when the browser tries to create a fancy letter. This doesn\'t mean there\'s an error with this translator, it just means the website\'s font doesn\'t support that character.',
    }, {
      id: '3',
      image: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      text: 'After generating your fancy text symbols, you can copy and paste the "fonts" to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text in agario is probably generated using a fancy text converter similar to this), to generate a creative-looking instagram, facebook, tumblr, or twitter post, for showing up n00bs on Steam, or just for sending messages full of beautiful text to your buddies.\n' +
        '\n' +
        'The only exception is if your paste destination has a font which doesn\'t support some unicode characters. For example, you\'ll might find that some websites don\'t use a unicode font, or if they do, the font doesn\'t have all the characters required. In that case, you\'ll see a generic "box" in which was created when the browser tries to create a fancy letter. This doesn\'t mean there\'s an error with this translator, it just means the website\'s font doesn\'t support that character.',
    }, {
      id: '3',
      image: 'https://images.unsplash.com/photo-1579623261984-41f9a81d4044?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      text: 'After generating your fancy text symbols, you can copy and paste the "fonts" to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text in agario is probably generated using a fancy text converter similar to this), to generate a creative-looking instagram, facebook, tumblr, or twitter post, for showing up n00bs on Steam, or just for sending messages full of beautiful text to your buddies.\n' +
        '\n' +
        'The only exception is if your paste destination has a font which doesn\'t support some unicode characters. For example, you\'ll might find that some websites don\'t use a unicode font, or if they do, the font doesn\'t have all the characters required. In that case, you\'ll see a generic "box" in which was created when the browser tries to create a fancy letter. This doesn\'t mean there\'s an error with this translator, it just means the website\'s font doesn\'t support that character.',
    }

  ];
  const informationDisplay = informationArray.map((info) => {
    return(
      <div>
        <img src={info.image} alt="information" />
      </div>
    )
  } );

  return (
    <>
      <h2 className='text-2xl md:text-3xl lg:text-4xl text-center py-7 font-extrabold'>Información</h2>
      <div>
        {informationDisplay}
      </div>
      </>
      )
};
export default Informacion;
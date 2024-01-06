import {useState} from 'react';
 
export default function  ControlledComponent()  {
	const  [inputValue, setInputValue] =  useState('');

return  (
<form>
<button class="plausible-event-name=Feedback plausible-event-page=create-a-page plausible-event-sentiment=Positive">Happy</button>

<button class="plausible-event-name=Feedback plausible-event-page=create-a-page plausible-event-sentiment=Negative">Sad</button>
</form>
)};



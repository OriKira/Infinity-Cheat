const init = () => {
	/* Unlock units. */
	const contents = [ContentType.unit];
	
	for (let content of contents){
		Vars.content.getBy(content).each(c => c.alwaysUnlocked = true);
	};
};

init();
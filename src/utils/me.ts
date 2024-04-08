export class Me {
	public readonly firstName = 'Axel';
	public readonly lastName = 'Avaux';
	public birthday = new Date('1998-03-05');
	public title = 'Technical Lead Developer';
	public company = 'We Invest Real Estate';
	public location = 'Sambreville, Belgium';
	public email = '';

	public get fullName(): string {
		return this.firstName + ' ' + this.lastName;
	}

	public get age(): number {
		const now = new Date();
		const age = now.getFullYear() - this.birthday.getFullYear();
		const month = now.getMonth() - this.birthday.getMonth();
		const day = now.getDate() - this.birthday.getDate();
		if (month < 0 || (month === 0 && day < 0)) {
			return age - 1;
		}
		return age;
	}

	public get currentPosition(): string {
		return this.title + ' @ ' + this.company;
	}
}

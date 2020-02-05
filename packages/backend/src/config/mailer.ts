type MailerTypes = {
  host: string;
  port: string;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  },
  default: {
    from: string;
  }
}

const mailerConfig: MailerTypes = {
  host: 'smtp.mailtrap.io',
  port: '2525',
  secure: false,
  auth: {
    user: '0d647cd2a04352',
    pass: '46c8bd3bd64996'
  },
  default: {
    from: 'Equipe FastFeet <noreply@fastfeet.com>'
  }
}

export default mailerConfig

import { FC, useState } from 'react';
import { useForm } from '@mantine/form';
import {
  Button,
  Checkbox,
  Group,
  Textarea,
  TextInput,
  Text,
  Flex,
  VisuallyHidden,
} from '@mantine/core';
import styles from './Contact.module.scss';
import LinkContainer from '@app/components/LinkContainer/LinkContainer';
import EmailCopy from '@app/components/EmailCopy/EmailCopy';
import MaxwidthContainer from '@app/components/MaxwidthContainer/MaxwidthContainer';
import BackgroundSection from '@app/components/BackgroundSection/BackgroundSection';
import { IconLink } from '@app/types';

const links: IconLink[] = [
  { type: 'instagram' },
  { type: 'spotify' },
  { type: 'appleMusic' },
  { type: 'youtube' },
];

const Contact: FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
      gdpr: false,
    },

    validate: {
      name: (value) => (value.trim().length > 0 ? null : 'Name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      message: (value) =>
        value.trim().length > 10 ? null : 'Message must be at least 10 characters',
      gdpr: (value) => (value ? null : 'You must agree to the GDPR terms'),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <BackgroundSection id="kontakt" background="black">
      <MaxwidthContainer id="kontakt" className={styles.contactSection}>
        <VisuallyHidden component={'h2'}>Contact</VisuallyHidden>
        <form onSubmit={form.onSubmit(handleSubmit)} className={styles.contactContainer}>
          <TextInput
            label="Name"
            placeholder="Dein Name"
            {...form.getInputProps('name')}
            withAsterisk
            size="md"
            radius="md"
            key={form.key('name')}
          />
          <TextInput
            label="E-mail"
            placeholder="you@example.com"
            {...form.getInputProps('email')}
            withAsterisk
            size="md"
            radius="md"
            key={form.key('email')}
          />
          <Textarea
            label="Nachricht"
            placeholder="Schreibe eine Nachricht..."
            minRows={4}
            autosize
            {...form.getInputProps('message')}
            withAsterisk
            size="md"
            radius="md"
          />
          <Checkbox
            style={{ maxWidth: '400px' }}
            label="Ich bin damit einverstanden, dass diese Daten zum Zweck der Kontaktaufnahme gespeichert und verarbeitet werden. Mir ist bekannt, dass ich meine Einwilligung jederzeit widerrufen kann."
            {...form.getInputProps('gdpr', { type: 'checkbox' })}
          />
          <Group mt="md">
            <Button type="submit" loading={status === 'sending'}>
              Senden
            </Button>
          </Group>

          {status === 'sent' && <Text c="primary.5">Nachricht erfolgreich gesendet!</Text>}
          {status === 'error' && (
            <Text c="red">Etwas ist schief gelaufen. Bitte versuche es noch einmal.</Text>
          )}
        </form>
        <Flex
          gap={'32px'}
          direction={'column'}
          align={{ base: 'center', sm: 'flex-start' }}
          className={styles.otherContacts}
        >
          <Text size="24px" ff={'Oswald'} c={'white'} fw={600} component="h3">
            Oder erreiche uns unter
          </Text>
          <EmailCopy email="frago.mp3.music@gmail.com" />
          <LinkContainer className={styles.contactLinkContainer} iconLinks={links} />
        </Flex>
      </MaxwidthContainer>
    </BackgroundSection>
  );
};

export default Contact;

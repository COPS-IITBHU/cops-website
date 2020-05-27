---
layout: post
title:  "How to use multiple GitHub accounts on single machine"
date:   2020-05-27
desc: "A detailed blog about using multiple GitHub accounts on a single machine via HTTPS or SSH"
keywords: "git, github, version control, vcs, open source"
categories: [Blog]
tags: [knowledge]
icon:
---

---

Most of us have multiple (mostly two) GitHub accounts, personal and work account. You need to have the ability to push and pull to multiple accounts. This post is about how to setup and use them on a single machine using HTTPS or SSH.

**Note**: The instructions below have all been executed on macOS and should work fine on all **Unix** based operating systems.

**PS**: This blog is originally published on [https://jogendra.github.io/](https://jogendra.github.io/how-to-use-multiple-github-accounts-on-single-machine)

## Using HTTPS

### Step 1: Change remote URL

```bash
git remote set-url <remote-name> https://<username>@github.com/<username>/<repo-name>.git
```

If you are setting-up new remote:

```bash
git remote add <remote-name> https://<username>@github.com/<username>/<repo-name>.git
```

### Step 2: Update git config

By default, git use a system-wide configuration file (global config file) or the one stored at top of your home directory to pick your `username` and `email`. To ensure that the commits appear as performed by correct username, you have to setup the `user.name` and `user.email` for project, too:

```bash
git config user.name <username>
git cofig user.email <your-email@example.com>
```

Every git repository has a hidden `.git` folder (dotfile) which stores all of git related information. You can always check the username and email for a particular project.

```bash
open .git/config // check [user] section for email and username
```

You are good to go now!

```bash
git push <remote> <branch>
```

Entering this, terminal will ask your GitHub account password (once). If it is asking for password each time you push commit, you can cache them using [git credential store](https://git-scm.com/docs/git-credential-store):

```bash
git config credential.helper store
```

> Using this helper will store your passwords unencrypted on disk, protected only by filesystem permissions. This command stores credentials indefinitely on disk for use by future Git programs.

## Using SSH

### Step 1: Generate new SSH Keys

Before generating new SSH keys, check for existing SSH keys. To list existing ssh keys, go to the terminal, run command `ls -al ~/.ssh`, files with extension **.pub** are your SSH keys. You need to have ssh keys for each account. If you are planning to use two accounts personal and work, there should be two SSH keys, if not, you have to generate them.

If you see _No such file or directory_ after running `ls -al ~/.ssh` command, go ahead and create _**~/.ssh**_ directory with command `mkdir -p ~/.ssh`.

#### Generate SSH key for Work account

To generate a new SSH key, go to terminal and run the command:

```bash
ssh-keygen -t rsa -C <work-email>
```

To get the email associated with your work account:

1. Go to GitHub
2. Log in to your work account
3. Navigate to _**Settings**_
4. Copy the associated email

On running the command, you will see:

```plain
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/<current user>/.ssh/id_rsa):
```

Enter file name `/Users/<current-user>/.ssh/id_rsa_work`. Default will be `id_rsa`. But to differentiate between work and personal, use **_id_rsa_work_**_ and **_id_rsa_personal_**.
After entering the key file name, you will be asked for entering passphrase.

```plain
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

> A passphrase is similar to a password. The purpose of the passphrase is usually to encrypt the private key. This makes the key file by itself useless to an attacker.

Read more about **Passphrase** [here](https://ssh.com/ssh/passphrase).

You can just hit _enter_ to skip Passphrase. You will see your generated key and key’s _randomart_ image.

> The randomart is meant to be an easier way for humans to validate keys.
> Validation is normally done by a comparison of strings (i.e. the hexadecimal representation of the key fingerprint), which humans are pretty slow and inaccurate at comparing. Randomart replaces this with structured images that are faster and easier to compare.

#### Generate SSH key for Personal account

Follow the same steps as generating an SSH key for the work account. Save the key file as **_id_rsa_personal_**.

After generating SSH keys for both work and personal account, if you enter `ls -al ~/.ssh`, you will see list of your keys as below:

```bash
-rw-------   1 <current-user>  staff  2655 Apr  5 02:18 id_rsa_work
-rw-r--r--   1 <current-user>  staff   579 Apr  5 02:18 id_rsa_work.pub
-rw-------   1 <current-user>  staff  2655 Apr  5 02:11 id_rsa_personal
-rw-r--r--   1 <current-user>  staff   571 Apr  5 02:11 id_rsa_personal.pub
```

**_id_rsa_work.pub_** and **_id_rsa_personal.pub_** are your public SSH keys. **_id_rsa_work_** and **_id_rsa_personal_** (keys without _.pub_ extension) are private keys. SSH keys always come in twos. The **private** key is stored on the client (your machine). The **public** key is stored on the remote machine.
When you makes an attempt to connect to a remote machine (GitHub here but true in general) via SSH, the SSH protocol will check your computer for the private key that matches the public key stored on the remote machine. If they matches, the connection is successful.

### Step 2: Add generated SSH Keys to GitHub accounts

#### For Work account

Copy your work account SSh key to machine clipboard with command:

```bash
pbcopy < ~/.ssh/id_rsa_work.pub
```

To associate SSH key with GitHub account:

1. Go to GitHub
2. Login to your work account
3. Navigate to **_Settings_**
4. Go to **_SSH and GPG Keys_** section from the sidebar
5. Click on **New SSH Key** button
6. Paste key in **_Key_** text field.

You will most likely receive a mail from GitHub that a new public key is added to your account.

#### For Personal account

Use key **_id_rsa_personal_** and follow the same step as work account for personal account.

### Step 3: Update git global configuration

_Ignore this step if you are going for **Step 4**_

Git global configuration file should be aware of all of your GitHub accounts. Run this command to edit the global config file:

```bash
git config --global --edit
```

Config file will open in **vim**, enter `i` for insert mode and enter:

```plain
[work]
  name = <work github username>
  email = <work email>
[personal]
  name = <personal github username>
  email = <personal email>
```

Press `esc` and `:wq` to exit the insert mode in vim.

Now, whenever you will be pulling or pushing, you will be asked which account should be used for this repositopry (once only) and the local _config file_ (repository level) will remember the account.

**Important**: Make sure you're using SSH instead of HTTPS as remote URL:

```bash
git remote set-url <remote-name> git@github.com:<username>/<repo-name>.git
```

If you are setting-up new remote:

```bash
git remote add <remote-name> git@github.com:<username>/<repo-name>.git
```

Now, you are all set to use multiple GitHub accounts on your machine!

Further, feel free to use SSH configuration rules explanined below if you find them more handy.

### Step 4: Add SSH configuration rules [OPTIONAL]

#### Register new SSH keys

Before configuring rules, register the new SSH Keys with the ssh-agent. Open the terminal and run:

```bash
ssh-add ~/.ssh/id_rsa_work
ssh-add ~/.ssh/id_rsa_personal
```

If you entered passphrase during generating key process, you will be asked to enter the same here, not otherwise.

```plain
Enter passphrase for /Users/<current-user>/.ssh/id_rsa_work:
```

_(same for personal account key)_

On success you will see:

```plain
Identity added: /Users/<current-user>/.ssh/id_rsa_work (<work-email>)
```

_(same for personal account key)_

To make sure if ssh-agent is running, run command `eval "$(ssh-agent -s)"`.

#### Create SSH Config File and Add Rules

Create new SSH config file by runnning

```bash
touch ~/.ssh/config
```

We need to add SSH config rules for different hosts to specify which identity file to use for which domain. This is way to tell SSH when to use work account and when to use personal account while performing git/github related stuff.

Open newly created config file with command `vim ~/.ssh/config`. You can choose other editor to edit file if you are not comfortable with vim.

Add rules to config file as below:

```plain
# Rule for Work account
Host github.com-work
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa_work

# Rule for Personal account
Host github.com-personal
   HostName github.com
   User git
   IdentityFile ~/.ssh/id_rsa_personal
```

#### Test the rules

To check if everything is working fine, create a new test repository on your personal GitHub account and run commands below in terminal:
```bash
mkdir TestRepo
cd TestRepo
git init
touch testfile.txt
echo "This is test line" >> testfile.txt
git add testfile.txt
git commit -m "This is test commit"
git remote add origin git@github-personal:<personal-username>/TestRepo.git
git push origin master
```

#### Things to be taken care

- If you have the repository already cloned update remote URLs like below:

```bash
git remote set-url <remote-name> git@github.com-personal:<username>/<repo-name>.git
```

- If you are creating a new repository set remote like below:

```bash
git remote add <remote-name> git@github.com-personal:<username>/<repo-name>.git
```

- If you are cloning a repository

```bash
git clone git@github.com-personal:<username>/<repo-name>.git
```

_(same for work repositories, use github.com-work)_

All set, rest will be taken care by SSH configuration!

Don't forget to share ^_^ You can [find me on Twitter](https://twitter.com/jogendrafx).

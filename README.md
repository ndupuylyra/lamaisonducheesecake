# La Maison du Cheesecake
"La Maison du Cheesecake" is a Symfony 7 project showcasing the Lyra Collect Marketplace API through a fictional e-commerce website.

## Requirements

- PHP from 8.2.X version
- A MySQL database system (like PHPMyAdmin if you use Wamp or Xampp)
- Composer
- Scoop
- Symfony CLI

## Installation

### 1 - Composer installation
Download and run the Composer installer : https://getcomposer.org/Composer-Setup.exe (you may need admin rights on your machine).
Once installed open a command prompt and type ***composer -v*** to check if Composer is correctly installed.

![image](https://github.com/ndupuylyra/lamaisonducheesecake/assets/92886727/50d0a4aa-fdb2-40bd-9175-250229a3aab7)

### 2 - Scoop installation (needed to install Symfony CLI)
Open a command prompt and type :
- ***Set-ExecutionPolicy RemoteSigned -scope CurrentUser*** then press ENTER.
- ***iwr -useb get.scoop.sh | iex*** then press ENTER.

### 3 - Symfony CLI installation
Open a command prompt and type ***scoop install symfony-cli*** then press ENTER.

### 4 - Download project
Download the ZIP project or make a ***git clone https://github.com/ndupuylyra/lamaisonducheesecake.git*** in a command prompt.

### 5 - Project setup
Open a command prompt inside the project folder you cloned or downloaded and type ***composer install***.

### 6 - Launch project web server
Open a command prompt inside the project folder and type ***symfony server:start***. As response the command prompt will give you the URL to put in the web browser.
**THIS STEP IS TO DO EVERYTIME YOU WANT TO LAUNCH THE PROJECT**

![image](https://github.com/ndupuylyra/lamaisonducheesecake/assets/92886727/54c05a6d-7dc8-4f02-b4f8-1ee768466979)


# CFMNTIOE Community Bot

<p href="https://visitorbadge.io/status?path=https://github.com/bevvee/CFMNTIOE-Comminity-bot-discord" align=center><img src="https://api.visitorbadge.io/api/visitors?path=https://github.com/bevvee/CFMNTIOE-Comminity-bot-discord&label=%F0%9F%A5%B3VISITORS&labelColor=%23ffff00&countColor=%23263759" /><p>
<br />

## Description

This Discord bot is a moderation bot built using JavaScript and the Discord.js framework.
It is designed to help server administrators manage and moderate their Discord communities effectively.

## Features

- **Command Prefix:** `!` (You can change this in the configuration)
- **Commands:**
  - Menu 
  - users Avatar
  - View user information
  - Clear messages
  - Server information
  - Ping
- **Auto Role:** Get role for new users
- **Automatic Role Assignment:** Assign roles to new members automatically
- **Welcome Message:** Send welcome message withe image 

## Installation

1. Clone this repository:

   ```
   git clone https://github.com/yourusername/discord-moderation-bot.git
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a Discord bot on the [Discord Developer Portal](https://discord.com/developers/applications) and obtain a bot token.

4. Create a `.env` file in the root directory and add your bot token:

   ```
   DISCORD_TOKEN=your_bot_token_here
   ```

5. Configure the bot in `config.json` with your desired settings.

6. Start the bot:

   ```
   node index.js
   ```

## Usage

- Invite the bot to your server and ensure it has the necessary permissions.
- Use the command prefix (default: `!`) followed by the bot's commands to manage your server.

## Configuration

You can configure the bot by editing the `config.json` file. Customize prefixes, logging channels, and other settings to suit your server's needs.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Submit a pull request to this repository's `main` branch.

## Acknowledgments

- Thanks to the Discord.js community for their valuable resources and support.

## Support

If you encounter any issues or have questions, feel free to join our [Discord server](https://discord.gg/yourdiscordserver) for support.

```

Remember to replace placeholders like `yourusername`, `your_bot_token_here`, and `yourdiscordserver` with actual values specific to your project. Additionally, customize the sections as needed to provide more details about your bot and its functionality.

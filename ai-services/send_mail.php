<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mailConfigPath = __DIR__ . '/mail-config.php';
$mailConfig = file_exists($mailConfigPath) ? require $mailConfigPath : [];

function mail_config_value(array $config, string $key, ?string $default = null): string
{
    $value = $config[$key] ?? getenv($key) ?: $default;

    if ($value === null || $value === '') {
        throw new Exception("Missing mail configuration value: {$key}");
    }

    return (string)$value;
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Direct browser access strictly forbidden."]);
    exit;
}

$contentType = $_SERVER['CONTENT_TYPE'] ?? $_SERVER['HTTP_CONTENT_TYPE'] ?? '';
$isMultipart = stripos($contentType, 'multipart/form-data') !== false;

$data = $isMultipart ? $_POST : json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Server received an empty payload."]);
    exit;
}

$formType    = $data['form_type'] ?? ($data['subject'] ?? 'AI Agent Bot Consultation Request');
$clientEmail = $data['email'] ?? ($data['email_address'] ?? ($data['client_email'] ?? ''));
$clientName  = $data['name'] ?? ($data['full_name'] ?? ($data['client_name'] ?? ''));

$mail = new PHPMailer(true);

try {
    // ── SMTP Server Settings (JzarrTech Configuration) ───────────────────
    $mail->isSMTP();
    $mail->Host       = mail_config_value($mailConfig, 'SMTP_HOST');
    $mail->SMTPAuth   = true;
    $mail->Username   = mail_config_value($mailConfig, 'SMTP_USER');
    $mail->Password   = mail_config_value($mailConfig, 'SMTP_PASS');
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = (int) mail_config_value($mailConfig, 'SMTP_PORT', '2525');
    $mail->Timeout    = (int) mail_config_value($mailConfig, 'SMTP_TIMEOUT', '15');

    // Bypass for cPanel / shared hosting self-signed SSL certificates
    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    // ── Routing ──────────────────────────────────────────────────────────
    $mail->setFrom(mail_config_value($mailConfig, 'MAIL_FROM'), 'JzarrTech Web Portal');
    $mail->addAddress(mail_config_value($mailConfig, 'MAIL_TO_PRIMARY')); // Primary administrative inbox

    $secondaryRecipient = $mailConfig['MAIL_TO_SECONDARY'] ?? getenv('MAIL_TO_SECONDARY') ?: '';
    if ($secondaryRecipient !== '') {
        $mail->addAddress((string)$secondaryRecipient); // General inquiries inbox
    }

    if (!empty($clientEmail)) {
        $mail->addReplyTo($clientEmail, empty($clientName) ? 'JzarrTech Client' : $clientName);
    }

    // ── File Attachments Handling ────────────────────────────────────────
    $attachedFiles = [];
    if ($isMultipart && isset($_FILES['attachments'])) {
        $upload = $_FILES['attachments'];
        $allowedMime = ['image/png', 'image/jpeg', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        $allowedExt  = ['png', 'jpg', 'jpeg', 'pdf', 'doc', 'docx'];

        $fileNames = is_array($upload['name']) ? $upload['name'] : [$upload['name']];
        $fileTypes = is_array($upload['type']) ? $upload['type'] : [$upload['type']];
        $tmpNames  = is_array($upload['tmp_name']) ? $upload['tmp_name'] : [$upload['tmp_name']];
        $errors    = is_array($upload['error']) ? $upload['error'] : [$upload['error']];
        $sizes     = is_array($upload['size']) ? $upload['size'] : [$upload['size']];

        for ($i = 0; $i < count($fileNames); $i++) {
            if ($errors[$i] === UPLOAD_ERR_NO_FILE || empty($fileNames[$i])) {
                continue;
            }

            if ($errors[$i] !== UPLOAD_ERR_OK) {
                throw new Exception("One or more attachments could not be uploaded.");
            }

            $originalName = basename($fileNames[$i]);
            $fileExt = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));
            $mimeType = $fileTypes[$i] ?: '';

            if (!in_array($fileExt, $allowedExt, true) || !in_array($mimeType, $allowedMime, true)) {
                throw new Exception("Only PNG, JPG, PDF, and Word document attachments are allowed.");
            }

            if ($sizes[$i] > 10 * 1024 * 1024) {
                throw new Exception("File attachments must be 10MB or smaller.");
            }

            $mail->addAttachment($tmpNames[$i], $originalName);
            $attachedFiles[] = $originalName;
        }
    }

    $mail->isHTML(true);
    $mail->Subject = "New JzarrTech Inquiry: " . $formType;

    // ── HTML Body Builder (Futuristic AI Chatbot Aesthetic) ────────────────
    $htmlBody = "<!DOCTYPE html><html><head><meta charset='UTF-8'><title>JzarrTech AI Intake</title></head><body style='margin: 0; padding: 30px 15px; background-color: #030712; font-family: \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;'>";
    $htmlBody .= "<table align='center' border='0' cellpadding='0' cellspacing='0' width='100%' style='max-width: 620px; background: #080f25; border: 1px solid #1e3a8a; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);'>";
    
    // Header Banner
    $htmlBody .= "<tr><td style='background: linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e3a8a 100%); padding: 32px 30px; border-bottom: 1px solid #1e293b; text-align: center;'>";
    $htmlBody .= "<div style='display: inline-block; background: rgba(56, 189, 248, 0.12); border: 1px solid #38bdf8; color: #38bdf8; font-size: 11px; font-weight: 700; letter-spacing: 2px; padding: 5px 14px; border-radius: 20px; text-transform: uppercase; margin-bottom: 14px;'>🤖 AI AGENT DISPATCH</div>";
    $htmlBody .= "<h1 style='margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;'>JZARRTECH INTAKE PORTAL</h1>";
    $htmlBody .= "<p style='margin: 8px 0 0; font-size: 14px; color: #94a3b8; font-weight: 500;'>New inquiry captured and routed via Neural Gateway</p>";
    $htmlBody .= "</td></tr>";
    
    // Status Bar Strip
    $htmlBody .= "<tr><td style='background: #0f172a; padding: 14px 30px; border-bottom: 1px solid #1e293b;'>";
    $htmlBody .= "<table width='100%' border='0' cellpadding='0' cellspacing='0'><tr>";
    $htmlBody .= "<td style='color: #22c55e; font-size: 12px; font-weight: 700; letter-spacing: 0.5px;'><span style='display:inline-block; width:8px; height:8px; background:#22c55e; border-radius:50%; margin-right:6px;'></span> STATUS: LIVE ROUTING</td>";
    $htmlBody .= "<td align='right' style='color: #38bdf8; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;'>" . htmlspecialchars((string)$formType) . "</td>";
    $htmlBody .= "</tr></table>";
    $htmlBody .= "</td></tr>";
    
    // Content Area
    $htmlBody .= "<tr><td style='padding: 30px;'>";
    $htmlBody .= "<h2 style='margin: 0 0 18px; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; color: #38bdf8; font-weight: 700;'>⚡ Captured Parameters</h2>";
    
    $htmlBody .= "<table width='100%' border='0' cellpadding='0' cellspacing='0' style='background: #030712; border: 1px solid #1e293b; border-radius: 12px; overflow: hidden;'>";
    
    $rowCount = 0;
    foreach ($data as $key => $value) {
        $strVal = is_array($value) ? implode(", ", $value) : (string)$value;
        if ($key !== 'form_type' && trim($strVal) !== '') {
            $cleanLabel = ucwords(str_replace(['-', '_'], ' ', $key));
            $safeVal    = nl2br(htmlspecialchars($strVal));
            $bg = ($rowCount % 2 === 0) ? '#080f25' : '#0a132d';
            $htmlBody .= "<tr style='background: {$bg};'>";
            $htmlBody .= "<td width='35%' style='padding: 14px 18px; font-size: 13px; font-weight: 600; color: #94a3b8; border-bottom: 1px solid #1e293b; vertical-align: top;'>{$cleanLabel}</td>";
            $htmlBody .= "<td style='padding: 14px 18px; font-size: 14px; font-weight: 500; color: #f8fafc; border-bottom: 1px solid #1e293b; vertical-align: top;'>{$safeVal}</td>";
            $htmlBody .= "</tr>";
            $rowCount++;
        }
    }
    $htmlBody .= "</table>";

    // Attachments Section
    if (!empty($attachedFiles)) {
        $htmlBody .= "<div style='margin-top: 24px; background: rgba(56, 189, 248, 0.05); border: 1px dashed #38bdf8; border-radius: 10px; padding: 16px 20px;'>";
        $htmlBody .= "<strong style='display: block; margin-bottom: 8px; color: #38bdf8; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;'>📎 Transmitted Files</strong>";
        $htmlBody .= "<ul style='margin: 0; padding-left: 20px; color: #e2e8f0; font-size: 13px;'>";
        foreach ($attachedFiles as $fileName) {
            $htmlBody .= "<li style='margin-bottom: 4px;'>" . htmlspecialchars($fileName) . "</li>";
        }
        $htmlBody .= "</ul></div>";
    }

    // Quick Action Button
    if (!empty($clientEmail)) {
        $htmlBody .= "<div style='margin-top: 28px; text-align: center;'>";
        $htmlBody .= "<a href='mailto:" . htmlspecialchars($clientEmail) . "?subject=Re: JzarrTech AI Consultation' style='display: inline-block; background: linear-gradient(90deg, #0284c7, #2563eb); color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none; padding: 14px 28px; border-radius: 8px; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);'>💬 Instant Reply to Client</a>";
        $htmlBody .= "</div>";
    }

    $htmlBody .= "</td></tr>";
    
    // Footer
    $htmlBody .= "<tr><td style='background: #020617; padding: 22px 30px; border-top: 1px solid #1e293b; text-align: center;'>";
    $htmlBody .= "<p style='margin: 0; font-size: 12px; color: #64748b;'>⚡ Processed by <strong style='color: #94a3b8;'>JzarrTech Neural Engine</strong> • 24/7 Automated Dispatch</p>";
    $htmlBody .= "<p style='margin: 6px 0 0; font-size: 11px; color: #475569;'>C, 10 Rashid Minhas Rd, Gulshan-e-Iqbal, Karachi, Pakistan</p>";
    $htmlBody .= "</td></tr>";
    
    $htmlBody .= "</table>";
    $htmlBody .= "</body></html>";

    $mail->Body = $htmlBody;
    
    // Plain text fallback
    $mail->AltBody = "New Inquiry: {$formType}\n\n";
    foreach ($data as $key => $value) {
        $strVal = is_array($value) ? implode(", ", $value) : (string)$value;
        if ($key !== 'form_type' && trim($strVal) !== '') {
            $cleanLabel = ucwords(str_replace(['-', '_'], ' ', $key));
            $mail->AltBody .= "{$cleanLabel}: {$strVal}\n";
        }
    }

    $mail->send();

    echo json_encode(["status" => "success", "message" => "Message sent successfully! Our team will contact you shortly."]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "SMTP Delivery Failed: " . $mail->ErrorInfo,
        "debug" => $e->getMessage()
    ]);
}
?>

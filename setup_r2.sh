echo "R2 Konfigürasyonu başlatılıyor..."
mkdir -p ~/.aws
cat << EOC > ~/.aws/credentials
[r2]
aws_access_key_id = $R2_ACCESS_KEY_ID
aws_secret_access_key = $R2_SECRET_ACCESS_KEY
EOC

cat << EOC > ~/.aws/config
[profile r2]
region = auto
endpoint_url = https://5a0a09478148a5c70ba79d8e7e178f46.r2.cloudflarestorage.com
EOC
echo "Konfigürasyon tamamlandı."
